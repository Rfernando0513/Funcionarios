using System.Text.Json.Serialization;

namespace ApiFuncionarios.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DepartamentoEnum
    {
        Rh,
        Financeiro,
        Compras,
        Atendimento,
        Zeladoria
    }
}
