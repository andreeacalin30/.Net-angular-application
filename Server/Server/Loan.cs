using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class Loan
    {

        //the field “Id” if given will be treated as “Primary Key”
        public string Id { get; set; }
        public string borrower_name { get; set; }
        public float repayment_amount { get; set; }
        public float funding_amount { get; set; }

    }
}
