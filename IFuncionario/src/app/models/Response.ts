export interface Response<T>{
    dados: T;
    messagem: string;
    sucesso: boolean;
} 