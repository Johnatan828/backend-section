const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config

const config = require("../config");
const app = require(".");

// Services
const { HomeService, UserService, CommentService, IdeaService, } = require('../services');

// Controllers

const { HomeController } = require("../controllers");

//Routes

const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes")

//Models

const { User, Idea, Comment } = require('../models');

//Repositories

const {
    UserRepository,
    CommentRepository,
    IdeaRepository
} = require("../repositories")


const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton()



    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    })


module.exports = container;