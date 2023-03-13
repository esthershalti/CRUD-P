using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;   
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]

    public class customerInvoicesController : ApiController
    {
        private DBModels db = new DBModels();

        // GET: api/customerInvoices
        public IQueryable<Customer_Invoices> GetCustomer_Invoices()
        {
            return db.Customer_Invoices;
        }

        // PUT: api/customerInvoices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer_Invoices(string id, Customer_Invoices customer_Invoices)
        { 

            if (id != customer_Invoices.InvId)
            {
                return BadRequest();
            }

            db.Entry(customer_Invoices).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Customer_InvoicesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/customerInvoices
        [ResponseType(typeof(Customer_Invoices))]
        public IHttpActionResult PostCustomer_Invoices(Customer_Invoices customer_Invoices)
        {
        
            db.Customer_Invoices.Add(customer_Invoices);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Customer_InvoicesExists(customer_Invoices.InvId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = customer_Invoices.InvId }, customer_Invoices);
        }

        // DELETE: api/customerInvoices/5
        [ResponseType(typeof(Customer_Invoices))]
        public IHttpActionResult DeleteCustomer_Invoices(string id)
        {
            Customer_Invoices customer_Invoices = db.Customer_Invoices.Find(id);
            if (customer_Invoices == null)
            {
                return NotFound();
            }

            db.Customer_Invoices.Remove(customer_Invoices);
            db.SaveChanges();

            return Ok(customer_Invoices);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Customer_InvoicesExists(string id)
        {
            return db.Customer_Invoices.Count(e => e.InvId == id) > 0;
        }
    }
}