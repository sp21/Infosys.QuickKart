using Infosys.QuickKart.DataAccessLayer;
using Infosys.QuickKart.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

using Infosys.QuickKart.BusinessLayer;
using Infosys.QuickKart.Common.Models;

namespace Infosys.QuickKart.Services.Controllers
{
    public class PurchaseController : ApiController
    {

        [HttpGet]
        public JsonResult<List<Common.Models.PurchaseDetail>> GetPurchaseDetailsByEmailId(string emailId)
        {
            try
            {
                CustomerBL customerBLObj = new CustomerBL();
                var purchaseList = customerBLObj.GetPurchaseDetailsByEmailId(emailId);
                return Json<List<Common.Models.PurchaseDetail>>(purchaseList);
            }
            catch (Exception ex)
            {
                return null;
            }
           
        }

    }
}
