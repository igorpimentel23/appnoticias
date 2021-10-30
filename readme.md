# App de notícias

Aplicação em React-Native para consulta e cadastro de notícias.

## Começando

Estas instruções te darão uma cópia do projeto pronta para rodar na sua máquina local para propósitos de testes.

### Pré-requisitos

Para a instalação do projeto, é necessário que o Yarn esteja instalado na máquina.

[Yarn](https://classic.yarnpkg.com/en/docs/install/)

Também é necessário que o ambiente de desenvolvimento do React-Native esteja preparado.

[Enviroment setup](https://reactnative.dev/docs/environment-setup)

### Instalando

Depois de clonar e baixar o projeto, execute:

```
cp .env.example .env
```
Em seguida, é preciso fazer o download das dependências:

```
yarn
```

Em seguida, execute:

```
cd ios && pod install && cd ..
```

Para iniciar o Metro Bundler, execute:

```
yarn start
```

Para executar o App em um sistema Android, execute:

```
yarn android
```

Para executar o App em um sistema IOS, execute:

```
yarn ios
```


## Autores

* **Igor Pimentel** - *Trabalho inicial* - [igorpimentel23](https://github.com/igorpimentel23)


## Licença

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
