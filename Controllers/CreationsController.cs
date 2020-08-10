using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheyWhoNameTheGods.Models;
using content;


namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CreationsController : ControllerBase
  {

    private readonly DatabaseContext _context;

    public CreationsController()
    {
      this._context = new DatabaseContext();
    }
    //GET api/Creations
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Creation>>> GetCreations()
    {
      return await _context.Creations.ToListAsync();
    }

    //GET api/Creations/id
    [HttpGet("{id}")]
    public async Task<IActionResult> GetSpecificCreation(int id)
    {
      var specificCreation = await _context
        .Creations
        .FirstOrDefaultAsync(f => f.Id == id);

      if (specificCreation == null)
      {
        return NotFound();
      }
      return Ok(new { specificCreation });
    }

    //PUT api/Creations/name/quantity
    [HttpPut("{id}/{addOrSubtract}/{quantity}")]
    public async Task<IActionResult> ChangePopulation(int id, string addOrSubtract, int quantity)
    {
      var specificCreation = await _context
        .Creations
        .FirstOrDefaultAsync(f => f.Id == id);

      if (specificCreation == null)
      {
        return NotFound();
      }

      if (addOrSubtract == "add")
      {
        specificCreation.Population += quantity;
      }
      else
      {
        specificCreation.Population -= quantity;
      }

      await _context.SaveChangesAsync();
      return Ok(new { specificCreation });
    }

    //Post: api/Creations
    [HttpPost]
    public async Task<ActionResult<Creation>> PostCreation(Creation creation)
    {
      Console.WriteLine(creation.BelongsToGod);
      var PatronDeity = await _context
        .Gods
        .Include(i => i.DivineCreations)
        .FirstOrDefaultAsync(f => f.Name == creation.BelongsToGod);
      Console.WriteLine(PatronDeity.Id);
      creation.GodId = PatronDeity.Id;

      _context.Creations.Add(creation);
      await _context.SaveChangesAsync();
      PatronDeity.DivineCreations.Add(creation);
      await _context.SaveChangesAsync();

      return creation;
    }

    //Delete: api/Creations/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Creation>> DeleteCreation(int id)
    {
      var creation = await _context.Creations.FindAsync(id);
      if (creation == null)
      {
        return NotFound();
      }

      _context.Creations.Remove(creation);
      await _context.SaveChangesAsync();
      return creation;
    }
  }
}