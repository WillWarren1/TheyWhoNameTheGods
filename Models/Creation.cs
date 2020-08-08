using System;

namespace TheyWhoNameTheGods.Models
{
  public class Creation
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string BelongsToGod { get; set; }

    public int GodId { get; set; }

#nullable enable
    public int? Population { get; set; }
#nullable disable
  }
}