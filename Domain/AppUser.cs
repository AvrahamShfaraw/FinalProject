using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DesplayName { get; set; }
        public string Bio { get; set; }
    }
}