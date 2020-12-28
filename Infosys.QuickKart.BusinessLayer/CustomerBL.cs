using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infosys.QuickKart.DataAccessLayer;
using Infosys.QuickKart.Common.Models;

namespace Infosys.QuickKart.BusinessLayer
{
    public class CustomerBL
    {

        public string ValidateUserCredentials(string emailId, string password)
        {
            string roleName = "";
            try
            {
                var dal = new QuickKartRepository();
                roleName = dal.ValidateLoginUsingLinq(emailId, password);
            }
            catch (Exception)
            {
                roleName = "Invalid credentials";
            }
            
            return roleName;
        }

        public bool RegisterUserUsingAPI(Common.Models.User user)
        {
            bool status;
            try
            {
                DataAccessLayer.User userObj = new DataAccessLayer.User();
                userObj.EmailId = user.EmailId;
                userObj.UserPassword = user.UserPassword;
                userObj.Gender = user.Gender;
                userObj.DateOfBirth = user.DateOfBirth;
                userObj.Address=user.Address;

                var dal = new QuickKartRepository();

                status = dal.RegisterUserUsingLinq(userObj);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        public List<Common.Models.Product> GetProducts()
        {
            try
            {
                var dal = new QuickKartRepository();
                var productList = dal.DisplayProductDetails();
                var products = new List<Common.Models.Product>();
                if (productList.Any())
                {
                    foreach (var prod in productList)
                    {
                        var product = new Common.Models.Product();
                        product.ProductId = prod.ProductId;
                        product.ProductName = prod.ProductName;
                        product.CategoryId = prod.CategoryId;
                        product.Price = prod.Price;
                        product.QuantityAvailable = prod.QuantityAvailable;

                        products.Add(product);
                    }
                }
                return products;
            }
            catch (Exception)
            {
                return null;
            }
           
        }

        public List<Common.Models.Category> GetCategories()
        {
            try
            {
                var dal = new QuickKartRepository();
                var categoryList = dal.GetCategoriesUsingLinq();
                var categories = new List<Common.Models.Category>();
                if (categoryList.Any())
                {
                    foreach (var cat in categoryList)
                    {

                        var category = new Common.Models.Category();
                        category.CategoryId = cat.CategoryId;
                        category.CategoryName = cat.CategoryName;
                        categories.Add(category);
                    }
                }
                return categories;
            }
            catch (Exception ex)
            {
                return null;
            }
            
        }

        public int AddProductToCart(Common.Models.Cart cartObj)
        {
            int returnvalue = -1;
            try
            {
                var dal = new QuickKartRepository();
                returnvalue = dal.AddProductToCartUsingUSP(cartObj.ProductId, cartObj.EmailId);
            }
            catch (Exception)
            {
                returnvalue = -1;
            }
            return returnvalue;
        }

        public List<Common.Models.CartProductsDetails> GetCartProducts(string emailId)
        {
            try
            {
                var dal = new QuickKartRepository();
                var cartProductList = dal.DisplayCartProductDetails(emailId);
                Common.Models.CartProductsDetails product;
                var cartProducts = new List<Common.Models.CartProductsDetails>();
                if (cartProductList.Any())
                {
                    foreach (var prod in cartProductList)
                    {
                        product = new Common.Models.CartProductsDetails();
                        product.ProductId = prod.ProductId;
                        product.ProductName = prod.ProductName;
                        product.Quantity = prod.Quantity;
                        product.QuantityAvailable = prod.QuantityAvailable;
                        product.Price = prod.Price;

                        cartProducts.Add(product);
                    }
                }
                return cartProducts;
            }
            catch (Exception)
            {
                return null;
            }
           
        }

        public bool UpdateCartProducts(Common.Models.Cart cartObj)
        {
            bool status = false;
            try
            {                
                var dal = new QuickKartRepository();
                status = dal.UpdateCartProductsLinq(cartObj.ProductId, cartObj.EmailId, cartObj.Quantity);
            }
            catch (Exception)
            {
                status = false;
            }

            return status;

        }

        public bool DeleteCartProduct(Common.Models.Cart cartObj)
        {
            var status = false;
            try
            {
                var dal = new QuickKartRepository();
                status = dal.DeleteCartProduct(cartObj.ProductId, cartObj.EmailId);
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public List<Common.Models.PurchaseDetail> GetPurchaseDetailsByEmailId(string emailId)
        {
            try
            {
                var dal = new QuickKartRepository();
                var purchaseList = dal.DisplayPurchaseDetailsByCustomer(emailId);

                var purchases = new List<Common.Models.PurchaseDetail>();
                if (purchaseList.Any())
                {
                    foreach (var purchase in purchaseList)
                    {
                        var purchaseObj = new Common.Models.PurchaseDetail();
                        purchaseObj.PurchaseId = purchase.PurchaseId;
                        purchaseObj.EmailId = purchase.EmailId;
                        purchaseObj.ProductId = purchase.ProductId;
                        purchaseObj.ProductName = purchase.Product.ProductName;
                        purchaseObj.QuantityPurchased = purchase.QuantityPurchased;
                        purchaseObj.PurchaseDate = purchase.DateOfPurchase.ToShortDateString();
                        purchases.Add(purchaseObj);
                    }
                }
                return purchases;
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        public List<Common.Models.Rating> DisplayAllReviewDetailsByCustomer(string emailId)
        {
            try
            {
                var dal = new QuickKartRepository();
                var ratingList = dal.DisplayAllReviewDetailsByCustomer(emailId);
                Common.Models.Rating rating;
                var ratings = new List<Common.Models.Rating>();
                if (ratingList.Any())
                {
                    foreach (var rate in ratingList)
                    {
                        rating = new Common.Models.Rating();
                        rating.EmailId = rate.EmailId;
                        rating.ProductId = rate.ProductId;
                        rating.ProductName = rate.Product.ProductName;
                        rating.ReviewComments = rate.ReviewComments;
                        rating.ReviewRating = rate.ReviewRating;

                        ratings.Add(rating);
                    }
                }
                return ratings;
            }
            catch (Exception ex)
            {
                return null;
            }
           
        }

        public bool InsertRating(Common.Models.Rating rating)
        {
            bool status = false;
            try
            {
                var dal = new QuickKartRepository();
                status = dal.AddRatings(rating);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        public Common.Models.Rating GetProductReviewByCustomer(string emailId, string productId)
        {
            var rating = new Common.Models.Rating();
            try
            {
                var dal = new QuickKartRepository();
                var rate = dal.GetProductReviewByCustomer(emailId, productId);

                rating.EmailId = rate.EmailId;
                rating.ProductId = rate.ProductId;
                rating.ReviewRating = rate.ReviewRating;
                rating.ReviewComments = rate.ReviewComments;

            }
            catch (Exception ex)
            {
                rating = null;
            }
            return rating;
        }

        public bool UpdateReviewComments(Common.Models.Rating rating)
        {
            bool status = false;
            try
            {
                var dal = new QuickKartRepository();
                status = dal.UpdateReviewComments(rating.EmailId, rating.ProductId, rating.ReviewComments);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        public bool DeleteRating(Common.Models.Rating rating)
        {
            var status = false;
            try
            {
                var dal = new QuickKartRepository();
                status = dal.DeleteRating(rating.EmailId, rating.ProductId);
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }


    }
}
