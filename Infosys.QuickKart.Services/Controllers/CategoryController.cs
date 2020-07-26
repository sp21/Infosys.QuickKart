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
    public class CategoryController : ApiController
    {

        [HttpGet]
        public JsonResult<List<Common.Models.Category>> GetCategories()
        {
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var categoryList = customerBLObj.GetCategories();
                return Json<List<Common.Models.Category>>(categoryList);
            }
            catch (Exception ex)
            {
                return null;
            }
          
        }

    }
}
