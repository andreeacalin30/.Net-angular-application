using System.Net;
using System.Net.Http;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{  
    [Route("[controller]")]
    [ApiController]
    public class LoansController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Loan> GetLoans()
        {
            using (DBConnector entities = new DBConnector())
            {
                return entities.LoansInfo.ToList();
            }
        }

        [HttpGet("{loanId}")]
        public Loan GetLoan(string loanId)
        {
            using (DBConnector entities = new DBConnector())
            {
                return entities.LoansInfo.FirstOrDefault(l => l.Id == loanId);
            }
        }

        [HttpPost]
        public HttpResponseMessage PostLoan([FromBody]Loan newLoan)
        {
            try
            {
                using (DBConnector entities = new DBConnector())
                {
                    if (newLoan.funding_amount > newLoan.repayment_amount)
                    {
                        var message = new HttpResponseMessage(HttpStatusCode.Forbidden);
                        return message;
                    }
                    else
                    {
                        entities.LoansInfo.Add(newLoan);
                        entities.SaveChanges();

                        var message = new HttpResponseMessage(HttpStatusCode.Created);
                        return message;
                    }
                    
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete]
        public HttpResponseMessage DeleteLoan([FromBody]Loan newLoan)
        {
            try
            {
                using (DBConnector entities = new DBConnector())
                {
                    entities.LoansInfo.Remove(newLoan);
                    entities.SaveChanges();

                    var message = new HttpResponseMessage(HttpStatusCode.OK);
                    return message;
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }


    }
}
