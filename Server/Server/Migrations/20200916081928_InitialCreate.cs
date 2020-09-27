using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LoansInfo",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    borrower_name = table.Column<string>(nullable: true),
                    repayment_amount = table.Column<float>(nullable: false),
                    funding_amount = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoansInfo", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "LoansInfo",
                columns: new[] { "Id", "borrower_name", "funding_amount", "repayment_amount" },
                values: new object[] { "44f9dbd5-251b-4d6f-8d11-17f5369d8256", "Amelia", 345f, 123f });

            migrationBuilder.InsertData(
                table: "LoansInfo",
                columns: new[] { "Id", "borrower_name", "funding_amount", "repayment_amount" },
                values: new object[] { "44f9dbd5-251b-4d6f-8d11-17f5369d8259", "Richard", 456f, 234f });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LoansInfo");
        }
    }
}
