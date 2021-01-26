using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MicahsFirstASPNETWebApp.Models
{
    public class GradeCalcModel
    {
        [Required(ErrorMessage ="This field is required.")]
        [Range(0, 100,
            ErrorMessage = "Assignments Grade must be a whole number from 1 to 100.")]
        public double assignments { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Range(0, 100,
            ErrorMessage = "Group Projects Grade must be a whole number from 1 to 100.")]
        public double group { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Range(0, 100,
            ErrorMessage = "Quizzes Grade must be a whole number from 1 to 100.")]
        public double quizzes { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Range(0, 100,
            ErrorMessage = "Exams Grade must be a whole number from 1 to 100.")]
        public double exams { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Range(0, 100,
            ErrorMessage = "Intex Grade must be a whole number from 1 to 100.")]
        public double intex { get; set; }
    }
}
