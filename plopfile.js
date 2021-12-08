const pluralize = require("pluralize");
module.exports = (plop) => {
  const modifyFiles = (data) => {
    data.name = pluralize.singular(data.name);
    return [
      {
        path: "./src/App.tsx",
        pattern: /(<\/Routes)/g,
        template: `\t<Route path="/{{snakeCase name}}" element={ <{{titleCase name}}/> }/>\n$1`,
        type: "modify",
      },
      {
        path: "./src/App.tsx",
        pattern: /(\/\/COMPONENT IMPORTS)/g,
        template:
          'import {{titleCase name}} from "./components/{{titleCase name}}/{{titleCase name}}"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducers.ts",
        pattern: /(\/\/REDUCER IMPORTS)/g,
        template:
          'import {{camelCase name}} from "../components/{{titleCase name}}/reducers"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducers.ts",
        pattern: /(\/\/REDUCERS)/g,
        template: "{{camelCase name}} : {{camelCase name}}, \n$1",
        type: "modify",
      },
      {
        path: "./src/common/sagas.ts",
        pattern: /(\/\/SAGA IMPORTS)/g,
        template:
          "import {{camelCase name}}RootSaga from '../components/{{titleCase name}}/sagas'\n$1",
        type: "modify",
      },
      {
        path: "./src/common/sagas.ts",
        pattern: /(\/\/SPAWN SAGAS)/g,
        template: "yield spawn({{camelCase name}}RootSaga)\n$1",
        type: "modify",
      },
    ];
  };

  const addFiles = (data) => {
    return [
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/index.tsx",
        templateFile: "src/templates/components/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/actions.ts",
        templateFile: "src/templates/actions/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/reducers.ts",
        templateFile: "src/templates/reducers/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/sagas.ts",
        templateFile: "src/templates/sagas/DenseTable.hbs",
      },
    ];
  };
  // plop.setActionType("addAPI", ({ name }) => {
  //   console.log(
  //     "%c 🍗 plop: ",
  //     "font-size:20px;background-color: #FFDD4D;color:#fff;",
  //     plop
  //   );
  //   plop.load();
  // });

  // plop.setGenerator("Table with dialog", {
  //   description: "Create a component with table and dialog",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your api name",
  //     },
  //     {
  //       type: "confirm",
  //       name: "api",
  //       message: "",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "addAPI",
  //     },
  //   ],
  // });

  // plop.setGenerator("Table without dialog", {
  //   description: "Create a component with table",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your api name",
  //     },
  //     {
  //       type: "confirm",
  //       name: "api",
  //       message: "",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "addAPI",
  //     },
  //   ],
  // });

  plop.setGenerator("Select table with dialog", {
    description: "Create a component with select table and dialog",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your api name",
      },
    ],
    actions: (data) => {
      let actions = [];
      actions = [...actions, ...modifyFiles(data)];
      actions = [...actions, ...addFiles(data)];
      return actions;
    },
  });
};
