/* eslint-disable */
export default async () => {
    const t = {
        ["./pais/entities/pais.entity"]: await import("./pais/entities/pais.entity"),
        ["./estado/entities/estado.entity"]: await import("./estado/entities/estado.entity"),
        ["./municipio/entities/municipio.entity"]: await import("./municipio/entities/municipio.entity"),
        ["./endereco/entities/endereco.entity"]: await import("./endereco/entities/endereco.entity"),
        ["./telefone/entities/telefone.entity"]: await import("./telefone/entities/telefone.entity"),
        ["./unidade/entities/unidade.entity"]: await import("./unidade/entities/unidade.entity"),
        ["./email/entities/email.entity"]: await import("./email/entities/email.entity"),
        ["./genero/entities/genero.entity"]: await import("./genero/entities/genero.entity"),
        ["./cargo/entities/cargo.entity"]: await import("./cargo/entities/cargo.entity"),
        ["./servidor/entities/servidor.entity"]: await import("./servidor/entities/servidor.entity"),
        ["./terceirizado/entities/terceirizado.entity"]: await import("./terceirizado/entities/terceirizado.entity"),
        ["./pessoa-fisica/entities/pessoa-fisica.entity"]: await import("./pessoa-fisica/entities/pessoa-fisica.entity"),
        ["./shared/enums/roles.enum"]: await import("./shared/enums/roles.enum"),
        ["./indisponibilidades/entities/indisponibilidade.entity"]: await import("./indisponibilidades/entities/indisponibilidade.entity"),
        ["./funcao/entities/funcao.entity"]: await import("./funcao/entities/funcao.entity"),
        ["./auth/users/entities/user.entity"]: await import("./auth/users/entities/user.entity"),
        ["./afastamentos/entities/afastamento.entity"]: await import("./afastamentos/entities/afastamento.entity"),
        ["./designacoes/entities/designacoe.entity"]: await import("./designacoes/entities/designacoe.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./genero/dto/create-genero.dto"), { "CreateGeneroDto": { nome: { required: true, type: () => String, minLength: 3 } } }], [import("./genero/dto/update-genero.dto"), { "UpdateGeneroDto": {} }], [import("./shared/entities/base.entity"), { "BaseEntity": { id: { required: true, type: () => Number }, dateCreated: { required: true, type: () => Date }, lastUpdate: { required: true, type: () => Date } } }], [import("./genero/entities/genero.entity"), { "Genero": { nome: { required: true, type: () => String } } }], [import("./cargo/dto/create-cargo.dto"), { "CreateCargoDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: true, type: () => String, minLength: 2 }, ordenacaoForcada: { required: true, type: () => Number }, ativa: { required: true, type: () => Boolean } } }], [import("./cargo/dto/update-cargo.dto"), { "UpdateCargoDto": {} }], [import("./cargo/entities/cargo.entity"), { "Cargo": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, ordenacaoForcada: { required: true, type: () => Number }, ativo: { required: true, type: () => Boolean } } }], [import("./pais/dto/create-pais.dto"), { "CreatePaisDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: true, type: () => String, minLength: 3, maxLength: 3 }, ddi: { required: true, type: () => String, minLength: 2 } } }], [import("./pais/dto/update-pais.dto"), { "UpdatePaisDto": {} }], [import("./pais/entities/pais.entity"), { "Pais": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, ddi: { required: true, type: () => String } } }], [import("./shared/dto/relation-entity.dto"), { "RelationEntityDto": { id: { required: true, type: () => Number, minimum: 1 } } }], [import("./estado/dto/create-estado.dto"), { "CreateEstadoDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: true, type: () => String, minLength: 2, maxLength: 2 }, regiao: { required: true, type: () => String }, pais: { required: true, type: () => t["./pais/entities/pais.entity"].Pais } } }], [import("./estado/dto/update-estado.dto"), { "UpdateEstadoDto": {} }], [import("./estado/entities/estado.entity"), { "Estado": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, regiao: { required: true, type: () => String }, pais: { required: true, type: () => t["./pais/entities/pais.entity"].Pais } } }], [import("./municipio/dto/create-municipio.dto"), { "CreateMunicipioDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: true, type: () => String, minLength: 3, maxLength: 3 }, ddd: { required: true, type: () => String, minLength: 2, maxLength: 2 }, regiao: { required: true, type: () => String, minLength: 3 }, estado: { required: true, type: () => t["./estado/entities/estado.entity"].Estado } } }], [import("./municipio/dto/update-municipio.dto"), { "UpdateMunicipioDto": {} }], [import("./municipio/entities/municipio.entity"), { "Municipio": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, ddd: { required: true, type: () => String }, regiao: { required: true, type: () => String }, estado: { required: true, type: () => t["./estado/entities/estado.entity"].Estado } } }], [import("./endereco/entities/endereco.entity"), { "Endereco": { CEP: { required: true, type: () => String }, logradouro: { required: true, type: () => String }, numero: { required: true, type: () => Number }, bairro: { required: true, type: () => String }, observacao: { required: true, type: () => String }, municipio: { required: true, type: () => t["./municipio/entities/municipio.entity"].Municipio }, tipo: { required: true, enum: t["./endereco/entities/endereco.entity"].TipoEndereco } } }], [import("./telefone/entities/telefone.entity"), { "Telefone": { numero: { required: true, type: () => String }, tipo: { required: true, enum: t["./telefone/entities/telefone.entity"].TipoTelefone }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./unidade/entities/unidade.entity"), { "Unidade": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, formal: { required: true, type: () => Boolean }, unidadeSuperiorImediata: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade }, ordenacaoForcada: { required: true, type: () => Number }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, endereco: { required: true, type: () => t["./endereco/entities/endereco.entity"].Endereco }, emails: { required: true, type: () => t["./email/entities/email.entity"].Email } } }], [import("./pessoa-fisica/entities/pessoa-fisica.entity"), { "PessoaFisica": { cpf: { required: true, type: () => String }, nome: { required: true, type: () => String }, dataNascimento: { required: true, type: () => Date }, sexo: { required: true, type: () => String }, genero: { required: true, type: () => t["./genero/entities/genero.entity"].Genero }, tipoSanguineo: { required: true, type: () => String }, cargo: { required: true, type: () => t["./cargo/entities/cargo.entity"].Cargo }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./servidor/entities/servidor.entity"), { "Servidor": { siape: { required: true, type: () => Number }, matricula: { required: true, type: () => Number }, dataPosse: { required: true, type: () => Date }, classe: { required: true, enum: t["./servidor/entities/servidor.entity"].TipoClasse }, nomeDeGuerra: { required: true, type: () => String }, ativo: { required: true, type: () => Boolean }, chefe: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, servidoresSubordinados: { required: true, type: () => [t["./servidor/entities/servidor.entity"].Servidor] }, terceirizadosSubordinados: { required: true, type: () => [t["./terceirizado/entities/terceirizado.entity"].Terceirizado] }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, enderecos: { required: false, type: () => [t["./endereco/entities/endereco.entity"].Endereco] }, emails: { required: false, type: () => [t["./email/entities/email.entity"].Email] } } }], [import("./email/entities/email.entity"), { "Email": { endereco: { required: true, type: () => String }, usuarios_unidade: { required: false, type: () => [t["./pessoa-fisica/entities/pessoa-fisica.entity"].PessoaFisica] }, tipo: { required: true, enum: t["./email/entities/email.entity"].TipoEmail }, proprietarioTerceirizado: { required: true, type: () => t["./terceirizado/entities/terceirizado.entity"].Terceirizado }, proprietarioServidor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./terceirizado/entities/terceirizado.entity"), { "Terceirizado": { matricula: { required: true, type: () => Number }, contrato: { required: true, type: () => String }, empresa: { required: true, type: () => String }, ativo: { required: true, type: () => Boolean }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, enderecos: { required: false, type: () => [t["./endereco/entities/endereco.entity"].Endereco] }, emails: { required: false, type: () => [t["./email/entities/email.entity"].Email] }, supervisor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor } } }], [import("./endereco/dto/create-endereco.dto"), { "CreateEnderecoDto": { CEP: { required: true, type: () => String, minLength: 8, maxLength: 8 }, logradouro: { required: true, type: () => String, minLength: 3 }, numero: { required: true, type: () => Number, minimum: 1 }, bairro: { required: true, type: () => String, minLength: 3 }, observacao: { required: true, type: () => String }, municipio: { required: true, type: () => t["./municipio/entities/municipio.entity"].Municipio }, tipo: { required: true, type: () => String } } }], [import("./telefone/dto/create-telefone.dto"), { "CreateTelefoneDto": { numero: { required: true, type: () => String, minLength: 8 }, tipo: { required: true, type: () => String }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./email/dto/create-email.dto"), { "CreateEmailDto": { endereco: { required: true, type: () => String }, usuarios_unidade: { required: false, type: () => [t["./pessoa-fisica/entities/pessoa-fisica.entity"].PessoaFisica] }, tipo: { required: true, type: () => String }, proprietarioTerceirizado: { required: false, type: () => t["./terceirizado/entities/terceirizado.entity"].Terceirizado }, proprietarioServidor: { required: false, type: () => t["./servidor/entities/servidor.entity"].Servidor }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./servidor/dto/create-servidor.dto"), { "CreateServidorDto": { siape: { required: true, type: () => Number }, matricula: { required: true, type: () => Number }, dataPosse: { required: true, type: () => Date }, classe: { required: true, enum: t["./servidor/entities/servidor.entity"].TipoClasse }, nomeDeGuerra: { required: true, type: () => String, minLength: 3 }, ativo: { required: true, type: () => Boolean }, chefe: { required: false, type: () => t["./servidor/entities/servidor.entity"].Servidor }, servidoresSubordinados: { required: false, type: () => [t["./servidor/entities/servidor.entity"].Servidor] }, terceirizadosSubordinados: { required: false, type: () => [t["./terceirizado/entities/terceirizado.entity"].Terceirizado] }, enderecos: { required: false, type: () => [t["./endereco/entities/endereco.entity"].Endereco] }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, emails: { required: false, type: () => [t["./email/entities/email.entity"].Email] } } }], [import("./servidor/dto/update-servidor.dto"), { "UpdateServidorDto": {} }], [import("./pessoa-fisica/dto/create-pessoa-fisica.dto"), { "CreatePessoaFisicaDto": { cpf: { required: true, type: () => String, minLength: 11, maxLength: 11 }, nome: { required: true, type: () => String, minLength: 3 }, dataNascimento: { required: true, type: () => Date }, sexo: { required: true, type: () => String }, genero: { required: true, type: () => t["./genero/entities/genero.entity"].Genero }, tipoSanguineo: { required: false, type: () => String }, cargo: { required: true, type: () => t["./cargo/entities/cargo.entity"].Cargo }, unidade: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade } } }], [import("./terceirizado/dto/create-terceirizado.dto"), { "CreateTerceirizadoDto": { matricula: { required: true, type: () => Number }, contrato: { required: true, type: () => String }, empresa: { required: true, type: () => String }, ativo: { required: true, type: () => Boolean }, enderecos: { required: false, type: () => [t["./endereco/entities/endereco.entity"].Endereco] }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, emails: { required: false, type: () => [t["./email/entities/email.entity"].Email] }, supervisor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor } } }], [import("./terceirizado/dto/update-terceirizado.dto"), { "UpdateTerceirizadoDto": {} }], [import("./unidade/dto/create-unidade.dto"), { "CreateUnidadeDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: true, type: () => String, minLength: 2 }, formal: { required: true, type: () => Boolean }, unidadeSuperiorImediata: { required: true, type: () => t["./unidade/entities/unidade.entity"].Unidade }, ordenacaoForcada: { required: true, type: () => Number }, telefones: { required: false, type: () => [t["./telefone/entities/telefone.entity"].Telefone] }, endereco: { required: true, type: () => t["./endereco/entities/endereco.entity"].Endereco }, emails: { required: true, type: () => t["./email/entities/email.entity"].Email } } }], [import("./unidade/dto/update-unidade.dto"), { "UpdateUnidadeDto": {} }], [import("./funcao/dto/create-funcao.dto"), { "CreateFuncaoDto": { nome: { required: true, type: () => String, minLength: 3 }, sigla: { required: false, type: () => String, minLength: 3, maxLength: 3 }, exclusiva: { required: true, type: () => Boolean }, ordenacaoForcada: { required: false, type: () => Number }, ativa: { required: true, type: () => Boolean }, telefone: { required: true, type: () => t["./telefone/entities/telefone.entity"].Telefone } } }], [import("./funcao/dto/update-funcao.dto"), { "UpdateFuncaoDto": {} }], [import("./funcao/entities/funcao.entity"), { "Funcao": { nome: { required: true, type: () => String }, sigla: { required: true, type: () => String }, exclusiva: { required: true, type: () => Boolean }, ordenacaoForcada: { required: true, type: () => Number }, ativa: { required: true, type: () => Boolean }, telefone: { required: false, type: () => t["./telefone/entities/telefone.entity"].Telefone } } }], [import("./auth/users/entities/user.entity"), { "User": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, pessoaAssociada: { required: true, type: () => t["./pessoa-fisica/entities/pessoa-fisica.entity"].PessoaFisica }, roles: { required: true, enum: t["./shared/enums/roles.enum"].Role, isArray: true } } }], [import("./auth/users/dto/create-user.dto"), { "CreateUserDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 4, maxLength: 20, pattern: "/((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$/" }, pessoaAssociada: { required: true, type: () => t["./pessoa-fisica/entities/pessoa-fisica.entity"].PessoaFisica }, roles: { required: true, type: () => [Number] } } }], [import("./auth/users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./indisponibilidades/dto/create-indisponibilidade.dto"), { "CreateIndisponibilidadeDto": { nome: { required: true, type: () => String, minLength: 3 } } }], [import("./indisponibilidades/dto/update-indisponibilidade.dto"), { "UpdateIndisponibilidadeDto": {} }], [import("./indisponibilidades/entities/indisponibilidade.entity"), { "Indisponibilidade": { nome: { required: true, type: () => String } } }], [import("./afastamentos/dto/create-afastamento.dto"), { "CreateAfastamentoDto": { servidor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, indisponibilidade: { required: true, type: () => t["./indisponibilidades/entities/indisponibilidade.entity"].Indisponibilidade }, dataInicio: { required: true, type: () => Date }, duracao: { required: true, type: () => Number, minimum: 1 }, exercicio: { required: true, type: () => Number } } }], [import("./afastamentos/dto/update-afastamento.dto"), { "UpdateAfastamentoDto": {} }], [import("./afastamentos/entities/afastamento.entity"), { "Afastamento": { servidor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, indisponibilidade: { required: true, type: () => t["./indisponibilidades/entities/indisponibilidade.entity"].Indisponibilidade }, dataInicio: { required: true, type: () => Date }, duracao: { required: true, type: () => Number }, exercicio: { required: true, type: () => Number } } }], [import("./designacoes/dto/create-designacoe.dto"), { "CreateDesignacoeDto": { servidor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, funcao: { required: true, type: () => t["./funcao/entities/funcao.entity"].Funcao }, dataDesignacao: { required: true, type: () => Date }, documento: { required: true, type: () => String, minLength: 1 }, numDocumento: { required: true, type: () => Number, minimum: 1 }, anoDocumento: { required: true, type: () => Number, minimum: 1 }, processoSei: { required: true, type: () => String, minLength: 20 }, documentoSei: { required: true, type: () => Number, minimum: 1 }, dataDispensa: { required: true, type: () => Date } } }], [import("./designacoes/dto/update-designacoe.dto"), { "UpdateDesignacoeDto": {} }], [import("./designacoes/entities/designacoe.entity"), { "Designacoe": { servidor: { required: true, type: () => t["./servidor/entities/servidor.entity"].Servidor }, funcao: { required: true, type: () => t["./funcao/entities/funcao.entity"].Funcao }, dataDesignacao: { required: true, type: () => Date }, documento: { required: true, type: () => String }, numDocumento: { required: true, type: () => Number }, anoDocumento: { required: true, type: () => Number }, processoSei: { required: true, type: () => String }, documentoSei: { required: true, type: () => Number }, dataDispensa: { required: true, type: () => Date } } }], [import("./email/dto/update-email.dto"), { "UpdateEmailDto": {} }], [import("./endereco/dto/update-endereco.dto"), { "UpdateEnderecoDto": {} }], [import("./pessoa-fisica/dto/update-pessoa-fisica.dto"), { "UpdatePessoaFisicaDto": {} }], [import("./telefone/dto/update-telefone.dto"), { "UpdateTelefoneDto": {} }]], "controllers": [[import("./genero/genero.controller"), { "GeneroController": { "create": { type: t["./genero/entities/genero.entity"].Genero }, "findAll": {}, "findOne": { type: t["./genero/entities/genero.entity"].Genero }, "update": { type: t["./genero/entities/genero.entity"].Genero }, "remove": { type: Boolean } } }], [import("./cargo/cargo.controller"), { "CargoController": { "create": { type: t["./cargo/entities/cargo.entity"].Cargo }, "findAll": {}, "findAllForced": {}, "findOne": { type: t["./cargo/entities/cargo.entity"].Cargo }, "update": { type: t["./cargo/entities/cargo.entity"].Cargo }, "remove": { type: Boolean } } }], [import("./pais/pais.controller"), { "PaisController": { "create": { type: t["./pais/entities/pais.entity"].Pais }, "findAll": {}, "findOne": { type: t["./pais/entities/pais.entity"].Pais }, "update": { type: t["./pais/entities/pais.entity"].Pais }, "remove": { type: Boolean } } }], [import("./estado/estado.controller"), { "EstadoController": { "create": { type: t["./estado/entities/estado.entity"].Estado }, "findAll": {}, "findOne": { type: t["./estado/entities/estado.entity"].Estado }, "update": { type: t["./estado/entities/estado.entity"].Estado }, "remove": { type: Boolean } } }], [import("./municipio/municipio.controller"), { "MunicipioController": { "create": { type: t["./municipio/entities/municipio.entity"].Municipio }, "findAll": {}, "findOne": { type: t["./municipio/entities/municipio.entity"].Municipio }, "update": { type: t["./municipio/entities/municipio.entity"].Municipio }, "remove": { type: Boolean } } }], [import("./servidor/servidor.controller"), { "ServidorController": { "create": { type: t["./servidor/entities/servidor.entity"].Servidor }, "findAll": {}, "findOne": { type: t["./servidor/entities/servidor.entity"].Servidor }, "update": { type: t["./servidor/entities/servidor.entity"].Servidor }, "remove": { type: Boolean } } }], [import("./terceirizado/terceirizado.controller"), { "TerceirizadoController": { "create": { type: t["./terceirizado/entities/terceirizado.entity"].Terceirizado }, "findAll": {}, "findOne": { type: t["./terceirizado/entities/terceirizado.entity"].Terceirizado }, "update": { type: t["./terceirizado/entities/terceirizado.entity"].Terceirizado }, "remove": { type: Boolean } } }], [import("./unidade/unidade.controller"), { "UnidadeController": { "create": { type: t["./unidade/entities/unidade.entity"].Unidade }, "findAll": {}, "findAllForced": {}, "findOne": { type: t["./unidade/entities/unidade.entity"].Unidade }, "update": { type: t["./unidade/entities/unidade.entity"].Unidade }, "remove": { type: Boolean } } }], [import("./funcao/funcao.controller"), { "FuncaoController": { "create": { type: t["./funcao/entities/funcao.entity"].Funcao }, "findAll": {}, "findAllForced": {}, "findOne": { type: t["./funcao/entities/funcao.entity"].Funcao }, "update": { type: t["./funcao/entities/funcao.entity"].Funcao }, "remove": { type: Boolean } } }], [import("./auth/auth.controller"), { "AuthController": { "login": { type: Object } } }], [import("./auth/users/users.controller"), { "UsersController": { "create": { type: t["./auth/users/entities/user.entity"].User }, "findAll": {}, "findOne": { type: t["./auth/users/entities/user.entity"].User }, "update": { type: t["./auth/users/entities/user.entity"].User }, "remove": { type: Boolean } } }], [import("./indisponibilidades/indisponibilidades.controller"), { "IndisponibilidadesController": { "create": { type: t["./indisponibilidades/entities/indisponibilidade.entity"].Indisponibilidade }, "findAll": {}, "findOne": { type: t["./indisponibilidades/entities/indisponibilidade.entity"].Indisponibilidade }, "update": { type: t["./indisponibilidades/entities/indisponibilidade.entity"].Indisponibilidade }, "remove": { type: Boolean } } }], [import("./afastamentos/afastamentos.controller"), { "AfastamentosController": { "create": { type: t["./afastamentos/entities/afastamento.entity"].Afastamento }, "findAll": {}, "findPeriodo": {}, "findOne": { type: t["./afastamentos/entities/afastamento.entity"].Afastamento }, "update": { type: t["./afastamentos/entities/afastamento.entity"].Afastamento }, "remove": { type: Boolean } } }], [import("./designacoes/designacoes.controller"), { "DesignacoesController": { "create": { type: t["./designacoes/entities/designacoe.entity"].Designacoe }, "findAll": {}, "findOne": { type: t["./designacoes/entities/designacoe.entity"].Designacoe }, "update": { type: t["./designacoes/entities/designacoe.entity"].Designacoe }, "remove": { type: Boolean } } }]] } };
};