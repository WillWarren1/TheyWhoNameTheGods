using Microsoft.EntityFrameworkCore.Migrations;

namespace TheyWhoNameTheGods.Migrations
{
    public partial class AddingGodId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations");

            migrationBuilder.AlterColumn<int>(
                name: "GodId",
                table: "Creations",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations",
                column: "GodId",
                principalTable: "Gods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations");

            migrationBuilder.AlterColumn<int>(
                name: "GodId",
                table: "Creations",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Creations_Gods_GodId",
                table: "Creations",
                column: "GodId",
                principalTable: "Gods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
