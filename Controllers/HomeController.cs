using Microsoft.AspNetCore.Mvc;
using MicahsFirstASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicahsFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET /
        public IActionResult Index()
        { 
            return View();
        }

        // GET /HOME/GradeCalc
        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }

        // POST /Home/GradeCalc
        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            // check if the model is valid
            // if valid, return a blank view
            // if invalid, return a view with error messsages
            if (ModelState.IsValid)
            {
                return View();
            }
            else
            { 
            return View(model);
            }
        }
    }
}
