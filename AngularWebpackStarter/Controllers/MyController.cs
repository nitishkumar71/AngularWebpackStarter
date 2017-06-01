using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebpackStarter.Controllers
{
    [RoutePrefix("api/my")]
    public class MyController : ApiController
    {
        [Route("")]
        [HttpGet]
        public String Get()
        {
            return "Hello";
        }
    }
}
