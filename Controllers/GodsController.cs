using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheyWhoNameTheGods.Models;
using content;
// using Microsoft.AspNetCore.Authorization;


namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  // [Authorize]
  public class GodsController : ControllerBase
  {

    private readonly DatabaseContext _context;

    public GodsController()
    {
      this._context = new DatabaseContext();
    }
    //GET api/Gods
    [HttpGet]
    public async Task<ActionResult<IEnumerable<God>>> GetGods()
    {
      return await _context.Gods.ToListAsync();
    }

    //GET api/Gods/name
    [HttpGet("{name}")]
    public async Task<IActionResult> GetSpecificGod(string name)
    {
      Console.WriteLine(name);
      var specificGod = await _context
        .Gods
        .FirstOrDefaultAsync(f => f.Name == name);
      Console.WriteLine(specificGod);

      if (specificGod == null)
      {
        return NotFound();
      }
      return Ok(new { specificGod });
    }

    //Put: api/Gods/id/favor

    [HttpPut("{id}/{addOrSubtract}/{quantity}")]
    public async Task<IActionResult> ChangeFavor(int id, string addOrSubtract, int quantity)
    {
      var specificGod = await _context
        .Gods
        .FirstOrDefaultAsync(f => f.Id == id);

      if (specificGod == null)
      {
        return NotFound();
      }
      if (addOrSubtract == "add")
      {
        specificGod.Favor += quantity;
      }
      else
      {
        specificGod.Favor -= quantity;
      }
      return Ok(new { specificGod });
    }


    //Post: api/Gods
    [HttpPost]
    public async Task<ActionResult<God>> PostGod(God god)
    {
      Console.WriteLine(god.Name);
      _context.Gods.Add(god);
      await _context.SaveChangesAsync();
      return god;
    }


    //Delete: api/Gods/id
    [HttpDelete("{id}")]
    public async Task<ActionResult<God>> DeleteGod(int id)
    {
      var god = await _context.Gods.FindAsync(id);
      if (god == null)
      {
        return NotFound();
      }

      foreach (Creation c in god.DivineCreations)
      {
        c.GodId = -1;
      }

      _context.Gods.Remove(god);
      await _context.SaveChangesAsync();
      return god;
    }
  }
}