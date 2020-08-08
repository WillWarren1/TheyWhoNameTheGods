using Microsoft.EntityFrameworkCore.Migrations;

namespace TheyWhoNameTheGods.Migrations
{
    public partial class checkingWhatsUp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GodId",
                table: "Creations",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Creations_GodId",
                table: "Creations",
                column: "GodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations",
                column: "GodId",
                principalTable: "Gods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations");

            migrationBuilder.DropIndex(
                name: "IX_Creations_GodId",
                table: "Creations");

            migrationBuilder.DropColumn(
                name: "GodId",
                table: "Creations");
        }
    }
}
