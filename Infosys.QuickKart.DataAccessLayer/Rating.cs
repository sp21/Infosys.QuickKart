//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Infosys.QuickKart.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class Rating
    {
        public string EmailId { get; set; }
        public string ProductId { get; set; }
        public byte ReviewRating { get; set; }
        public string ReviewComments { get; set; }
    
        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
