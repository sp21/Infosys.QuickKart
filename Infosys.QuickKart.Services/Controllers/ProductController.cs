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
    public class ProductController : ApiController
    {

        [HttpGet]
        public JsonResult<List<Common.Models.Product>> GetProducts()
        {
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var productList = customerBLObj.GetProducts();
                return Json<List<Common.Models.Product>>(productList);
            }
            catch (Exception ex)
            {
                return null;
            }
            
        }
    }
}
