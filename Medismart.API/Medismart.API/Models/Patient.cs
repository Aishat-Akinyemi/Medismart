using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Medismart.API.Models
{
    public class Patient
    {
        public int PatientID { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public double BMI { get; set; }
        public Gender Gender { get; set; }
        public string Address { get; set; }
        public string UnderlyingCondition { get; set; }
    }
}
