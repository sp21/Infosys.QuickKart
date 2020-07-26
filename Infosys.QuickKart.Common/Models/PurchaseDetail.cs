using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Infosys.QuickKart.Common.Models
{
    public class PurchaseDetail
    {
        public long PurchaseId { get; set; }
        public string ProductName { get; set; }
        public string EmailId { get; set; }
        public string ProductId { get; set; }
        public short QuantityPurchased { get; set; }
        public String PurchaseDate { get; set; }

    }
}