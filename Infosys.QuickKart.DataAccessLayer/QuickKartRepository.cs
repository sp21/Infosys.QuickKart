using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Infosys.QuickKart.Common.Models;

namespace Infosys.QuickKart.DataAccessLayer
{
    public class QuickKartRepository
    {
        private QuickKartDBContext Context { get; set; }

        public QuickKartRepository()
        {
            Context = new QuickKartDBContext();
        }

        //Validate user using LINQ    
        public string ValidateLoginUsingLinq(string emailId, string password)
        {
            string roleName = "";
            try
            {                
                var objUser = (from usr in Context.Users
                               where usr.EmailId == emailId && usr.UserPassword == password
                               select usr).FirstOrDefault<User>();

                if (objUser != null)
                {
                    roleName = objUser.Role.RoleName;
                }
                else
                {
                    roleName = "Invalid credentials";
                }                
            }
            catch (Exception)
            {
                roleName = "Invalid credentials";
            }
            return roleName;
        }

        //Register customer using LINQ
        public bool RegisterUserUsingLinq(User user)
        {
            bool status;
            try
            {
                var role = (from rol in Context.Roles where rol.RoleName == "Customer" select rol).FirstOrDefault<Role>();

                if (role != null)
                {
                    user.Role = role;
                }
                else
                {
                    status = false;
                }
                Context.Users.Add(user);
                Context.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }

            return status;
        }

        //Get all categories using LINQ
        public List<Category> GetCategoriesUsingLinq()
        {
            List<Category> lstCategories = null;
            try
            {
                lstCategories = (from c in Context.Categories
                                 orderby c.CategoryId
                                     ascending
                                 select c).ToList<Category>();
            }
            catch (Exception)
            {
                lstCategories = null;
            }
            return lstCategories;
        }

        //Display all the products
        public List<Product> DisplayProductDetails()
        {
            List<Product> lstProducts = null;
            try
            {
                lstProducts = (from c in Context.Products
                               orderby c.CategoryId
                                   ascending
                               select c).ToList<Product>();
            }
            catch (Exception ex)
            {
                lstProducts = null;
            }
            return lstProducts;
        }

        //Display purchases of customer
        public List<PurchaseDetail> DisplayPurchaseDetailsByCustomer(string emailId)
        {
            List<PurchaseDetail> lstPurchaseDetails = null;
            try
            {
                lstPurchaseDetails = Context.PurchaseDetails.Where(x => x.EmailId == emailId).OrderByDescending(x => x.DateOfPurchase).ToList<PurchaseDetail>();
            }
            catch (Exception ex)
            {
                lstPurchaseDetails = null;
            }
            return lstPurchaseDetails;
        }

        //Display product based upon product name
        public List<Product> DisplayProductDetailsByProductName(string subStr)
        {
            List<Product> lstProducts = null;
            try
            {
                lstProducts = (from c in Context.Products
                               where c.ProductName.ToLower().Contains(subStr.ToLower())
                               orderby c.CategoryId ascending
                               select c).ToList<Product>();
            }
            catch (Exception ex)
            {
                lstProducts = null;
            }
            return lstProducts;
        }

        //
        public int AddProductToCartUsingUSP(string productId, string emailId)
        {
            System.Nullable<int> returnvalue = -1;
            try
            {
                returnvalue = Context.usp_AddProductToCart(productId,emailId).SingleOrDefault();
                
            }
            catch (Exception)
            {
                returnvalue = -1;
            }
            return Convert.ToInt32(returnvalue);
        }

        public List<ufn_FetchCartProductByEmailId_Result> DisplayCartProductDetails(string emailId)
        {
            List<ufn_FetchCartProductByEmailId_Result> lstProducts = null;
            try
            {
                lstProducts = Context.ufn_FetchCartProductByEmailId(emailId).ToList<ufn_FetchCartProductByEmailId_Result>();
            }
            catch (Exception)
            {
                lstProducts = null;
            }
            return lstProducts;
        }

        public bool UpdateCartProductsLinq(string productId,string emailId, short quantity)
        {
            bool status = false;

            Cart cartproduct = null;
            try
            {

                cartproduct = (from cartProd in Context.Carts where cartProd.ProductId == productId && cartProd.EmailId==emailId select cartProd).FirstOrDefault<Cart>();
                if (cartproduct != null)
                {
                    cartproduct.Quantity = quantity;
                    Context.SaveChanges();
                    status = true;
                }
                else
                {
                    status = false;
                }
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public bool DeleteCartProduct(string productId, string emailId)
        {
            bool status = false;
            try
            {
                var product = (from cart in Context.Carts
                                where cart.ProductId == productId && cart.EmailId==emailId
                                select cart).FirstOrDefault<Cart>();
                Context.Carts.Remove(product);
                Context.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public List<Rating> DisplayAllReviewDetailsByCustomer(string emailId)
        {
            List<Rating> lstReviewDetails = null;
            try
            {
                lstReviewDetails = Context.Ratings.Where(x => x.EmailId == emailId).ToList<Rating>();
            }
            catch (Exception ex)
            {
                lstReviewDetails = null;
            }
            return lstReviewDetails;
        }

        public bool AddRatings(Common.Models.Rating rating)
        {
            bool status = false;
            try
            {
                Rating ratingObj = new Rating();
                ratingObj.EmailId = rating.EmailId;
                ratingObj.ProductId = rating.ProductId;
                ratingObj.ReviewComments = rating.ReviewComments;
                ratingObj.ReviewRating = rating.ReviewRating;

                Context.Ratings.Add(ratingObj);
                Context.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public Rating GetProductReviewByCustomer(string emailId, string productId)
        {
            Rating rating;
            try
            {
                rating = Context.Ratings.Where(r => r.EmailId == emailId && r.ProductId == productId).Select(r => r).SingleOrDefault();
            }
            catch (Exception ex)
            {
                rating = null;
            }
            return rating;
        }

        public bool UpdateReviewComments(string emailId, string productId, string newComment)
        {
            bool status = false;
            try
            {
                Rating rating = Context.Ratings.Where(r => (r.EmailId == emailId && r.ProductId == productId)).Select(r => r).FirstOrDefault<Rating>();
                rating.ReviewComments = newComment;
                Context.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public bool DeleteRating(string emailId, string productId)
        {
            bool status = false;
            try
            {
                Rating rating = Context.Ratings.Where(r => (r.EmailId == emailId && r.ProductId == productId)).Select(r => r).FirstOrDefault<Rating>();
                Context.Ratings.Remove(rating);
                Context.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }


    }
}
