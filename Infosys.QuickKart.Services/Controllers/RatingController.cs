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
    public class RatingController : ApiController
    {

        [HttpGet]
        public JsonResult<List<Common.Models.Rating>> DisplayAllReviewDetailsByEmailId(string emailId)
        {           
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var reviews = customerBLObj.DisplayAllReviewDetailsByCustomer(emailId);
                return Json<List<Common.Models.Rating>>(reviews);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpPost]
        public bool InsertRating(Common.Models.Rating rating)
        {
            bool status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                status = customerBLObj.InsertRating(rating);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        [HttpGet]
        public Common.Models.Rating GetProductReviewByCustomer(string emailId, string productId)
        {
            var rating = new Common.Models.Rating();
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                rating = customerBLObj.GetProductReviewByCustomer(emailId, productId);
            }
            catch (Exception ex)
            {
                rating = null;
            }
           return rating;
        }

        [HttpPut]
        public bool UpdateReviewComments(Common.Models.Rating rating)
        {
            bool status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                status = customerBLObj.UpdateReviewComments(rating);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        [HttpDelete]
        public bool DeleteRating(Common.Models.Rating rating)
        {
            var status = false;
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                status = customerBLObj.DeleteRating(rating);
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }



    }
}
