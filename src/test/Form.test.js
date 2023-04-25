const { User } = require("../User");

describe("test Form ", () => {
  const newItem = {
    title: "Travailler sur un projetUNIQUE",
    text: "Développer une application web",
    creationTimestamp: 0,
  };

  it("should have not add toDoItem because User is not valid", () => {
    const user = new User("test.fr", "test", "test", 13);
    const res = {
      status: "error",
      error: "User is not valid",
    };
    expect(user.addToDoListItem(newItem)).toStrictEqual(res);
  });

  it("should have add toDoItem", () => {
    const user = new User("test@test.fr", "test", "test", 13);
    const res = {
      status: "added",
    };
    expect(user.addToDoListItem(newItem)).toStrictEqual(res);
  });

  it("should have add toDoItem but send el famoso email", () => {
    const todoListWith7Items = [
      {
        title: "Faire les courses",
        text: "Acheter du pain, du lait et des oeufs",
        creationTimestamp: 0,
      },
      {
        title: "Nettoyer la maison",
        text: "Passer l'aspirateur et laver les vitres",
        creationTimestamp: 0,
      },
      {
        title: "Faire une promenade",
        text: "Aller marcher dans le parc",
        creationTimestamp: 0,
      },
      {
        title: "Préparer le dîner",
        text: "Cuisiner des pâtes à la sauce tomate",
        creationTimestamp: 0,
      },
      {
        title: "Apprendre une nouvelle langue",
        text: "Commencer à apprendre l'espagnol",
        creationTimestamp: 0,
      },
      {
        title: "Faire du sport",
        text: "Aller courir pendant 30 minutes",
        creationTimestamp: 0,
      },
      {
        title: "Regarder un film",
        text: "Regarder le film 'La La Land'",
        creationTimestamp: 0,
      },
    ];
    const user = new User(
      "test@test.fr",
      "test",
      "test",
      13,
      todoListWith7Items
    );

    const res = {
      status: "added",
      emailSended: true,
    };
    expect(user.addToDoListItem(newItem)).toStrictEqual(res);
  });

  it("should have not add toDoItem because not wait 30 minutes", () => {
    const todoListWith1Items = [
      {
        title: "Travailler sur un projetUNIQUE",

        text: "Acheter du pain, du lait et des oeufs",
        creationTimestamp: Date.now(),
      },
    ];
    const user = new User(
      "test@test.fr",
      "test",
      "test",
      13,
      todoListWith1Items
    );
    const item = {
      title: "Travailler sur un projetUNIQUE",
      text: "Développer une application web",
      creationTimestamp: Date.now(),
    };
    const res = {
      status: "error",
      error: "Time creation to close",
    };
    expect(user.addToDoListItem(item)).toStrictEqual(res);
  });

  it("should have not add toDoItem because not too long", () => {
    const item = {
      title: "Travailler sur un projet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo lacus eu est laoreet, quis varius mi laoreet. Morbi pellentesque pharetra tincidunt. Nullam rutrum aliquet libero. Praesent tincidunt neque elit, id ullamcorper eros faucibus eget. Donec imperdiet nisl sit amet dolor varius, vel pharetra tellus gravida. Nunc sodales commodo lacinia. Fusce feugiat mauris sed velit pretium, vel bibendum sem rhoncus. Duis nec interdum magna. Nulla facilisi. Nam commodo, erat vel dapibus semper, ante quam accumsan lorem, quis placerat dolor eros et nibh. Donec mollis, magna eget egestas aliquet, magna enim tincidunt erat, at ultricies lectus nulla sit amet lorem. Maecenas eget ligula rutrum, pretium mauris a, lobortis nulla. Aliquam pharetra mauris et augue tristique, vel pretium lacus finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo, libero vel euismod facilisis, elit elit volutpat ipsum, at dictum eros ex eu augue. Quisque mattis massa ut blandit consectetur. Suspendisse hendrerit sollicitudin tortor, vitae vulputate enim semper eu. Fusce vestibulum urna eu enim elementum feugiat. In bibendum, magna quis pharetra dapibus, lorem ipsum consequat augue, eu bibendum tortor nunc vel elit.",
      creationTimestamp: Date.now(),
    };
    const user = new User("test@test.fr", "test", "test", 13);
    const res = {
      status: "error",
      error: "Your note should be less than 1000 char",
    };
    expect(user.addToDoListItem(item)).toStrictEqual(res);
  });

  it("should have not add toDoItem because too much Item", () => {
    const todoListWith10Items = [
      {
        title: "Faire les courses",
        text: "Acheter du pain, du lait et des oeufs",
        creationTimestamp: 0,
      },
      {
        title: "Nettoyer la maison",
        text: "Passer l'aspirateur et laver les vitres",
        creationTimestamp: 0,
      },
      {
        title: "Faire une promenade",
        text: "Aller marcher dans le parc",
        creationTimestamp: 0,
      },
      {
        title: "Préparer le dîner",
        text: "Cuisiner des pâtes à la sauce tomate",
        creationTimestamp: 0,
      },
      {
        title: "Apprendre une nouvelle langue",
        text: "Commencer à apprendre l'espagnol",
        creationTimestamp: 0,
      },
      {
        title: "Faire du sport",
        text: "Aller courir pendant 30 minutes",
        creationTimestamp: 0,
      },
      {
        title: "Regarder un film",
        text: "Regarder le film 'La La Land'",
        creationTimestamp: 0,
      },
      {
        title: "Faire du yoga",
        text: "Pratiquer le yoga pendant 1 heure",
        creationTimestamp: 0,
      },
      {
        title: "Lire un livre",
        text: "Lire le livre 'Le Seigneur des Anneaux'",
        creationTimestamp: 0,
      },
      {
        title: "Travailler sur un projet",
        text: "Développer une application web",
        creationTimestamp: 0,
      },
    ];
    const user = new User(
      "test@test.fr",
      "test",
      "test",
      13,
      todoListWith10Items
    );
    const res = {
      status: "error",
      error: "Too many items",
    };
    expect(user.addToDoListItem(newItem)).toStrictEqual(res);
  });
  it("should have not add toDoItem because too not title unique", () => {
    const todoListWith1Items = [
      {
        title: "Travailler sur un projetUNIQUE",

        text: "Acheter du pain, du lait et des oeufs",
        creationTimestamp: 0,
      },
    ];
    const user = new User(
      "test@test.fr",
      "test",
      "test",
      13,
      todoListWith1Items
    );
    const res = {
      status: "error",
      error: "Title is not unique",
    };
    expect(user.addToDoListItem(newItem)).toStrictEqual(res);
  });
});
