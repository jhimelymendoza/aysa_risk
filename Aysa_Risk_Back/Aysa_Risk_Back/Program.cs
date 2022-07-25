using System.Configuration;
using System.Text.Json.Serialization;
using Aysa_Risk_Business_Logic.Administration;
using Aysa_Risk_Business_Logic.Notes;
using Aysa_Risk_Data_Access;
using Aysa_Risk_Data_Access.Entities.Note;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddScoped<INoteService, NoteService>();

#region RegisterService



#endregion

#region RegisterRepositories
builder.Services.AddScoped(typeof(IGenericRepository<,>), typeof(GenericRepository<,>));

builder.Services.AddScoped<INoteRepository, NoteRepository>();


#endregion
builder.Services.AddDbContext<AysaRiskContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddTransient(configuration => new DbContextOptionsBuilder<AysaRiskContext>().UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")).Options);

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
builder.Services.AddControllers().AddJsonOptions(o => o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter())); 

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Aysa_Risk.Api v1"));

}

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();

app.MapControllers();

app.Run();
