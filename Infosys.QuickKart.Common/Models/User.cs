using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Infosys.QuickKart.Common.Models
{
    public class User
    {
        public string EmailId { get; set; }
        public string UserPassword { get; set; }
        public Nullable<byte> RoleId { get; set; }
        public string Gender { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string Address { get; set; }       
        public virtual Common.Models.Role Role { get; set; }
    }
}