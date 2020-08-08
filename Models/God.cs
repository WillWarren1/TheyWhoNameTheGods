using System;
using System.Collections.Generic;

namespace TheyWhoNameTheGods.Models
{
  public class God
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Title { get; set; }

    public string Domain { get; set; }

    public List<Creation> DivineCreations { get; set; } = new List<Creation>();

    public int Favor { get; set; }
  }
}