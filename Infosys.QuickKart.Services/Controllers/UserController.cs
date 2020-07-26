using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Web.Http.Results;
using Infosys.QuickKart.DataAccessLayer;
using Infosys.QuickKart.Services.Repository;

using Infosys.QuickKart.BusinessLayer;
using Infosys.QuickKart.Common.Models;



namespace Infosys.QuickKart.Services.Controllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        public string ValidateUserCredentials(Common.Models.User userObj)
        {
            string userRole = string.Empty;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();               
                userRole = customerBLObj.ValidateUserCredentials(userObj.EmailId, userObj.UserPassword);
            }
            catch (Exception)
            {
                userRole="Invalid credentials";
            }           
            return userRole;
        }

        [HttpPost]
        public bool InsertUserDetails(Common.Models.User user)
        {
            var status = false;
            try
            {                
                CustomerBL customerBLObj = new CustomerBL();
                status = customerBLObj.RegisterUserUsingAPI(user);
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        [HttpPost]
        public bool AddProductToCart(Common.Models.Cart cartObj)
        {
            var status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var returnValue = customerBLObj.AddProductToCart(cartObj);

                if (returnValue > 0)
                {
                    status = true;
                }
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        [HttpGet]
        public JsonResult<List<Common.Models.CartProductsDetails>> GetCartProducts(string emailId)
        {
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var cardProducts = customerBLObj.GetCartProducts(emailId);
                return Json<List<Common.Models.CartProductsDetails>>(cardProducts);
            }
            catch (Exception)
            {
                return null;
            }
           
        }

        [HttpPut]
        public bool UpdateCartProducts(Common.Models.Cart cartObj)
        {
            bool status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();            
                status = customerBLObj.UpdateCartProducts(cartObj);           
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        [HttpDelete]
        public bool DeleteCartProduct(Common.Models.Cart cartObj)
        {
            var status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                status = customerBLObj.DeleteCartProduct(cartObj);
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }
    }
}
