const express = require("express");
const router = express.Router();
const views = require("../controller/ControllerView");
const form = require("../controller/ControllerForm");
 const alth = require("../controller/ControllerAuth");

router.get("/", views.home);

router.get("/finalizarCompra/:id", views.finalizarCompra);

router.get("/realizePedido", views.realizePedido);
router.post("/realizePedido", form.realizePedido);

router.get("/sejaFranqueado", views.sejaFranqueado);

router.post("/sejaFranqueado", form.sejaFranqueado);

router.get("/cadastroProduto", views.cadastroProduto);

router.get("/meu-pedido/:id", views.meuPedidoView);

router.get("/pedido-realizado/:id", views.pedRealizadoView);

router.get("/admin/ordem-do-pedido/:id", views.admOrderView);

router.post("/admin/criar-produto", form.admCreate);

router.get("/cardapio", views.cardapioView); //sem css

router.get("/cadastroUsuario", views.cadastroUsuario);

router.post("/cadastrarUsuario",alth.register);

router.get('/acessoUsuario', views.acessoUsuario);

router.get('/feedback', views.feedback);

router.post('/feedback/avaliacao' , form.feedbackAvaliacao);

router.get('/consultaOrdemPedido', views.consultaOrdemPedido) 

router.get('/recuperarSenha', views.recuperarSenha) 

router.get('/statusPedido', views.statusPedido) 

router.get('/pagamentocredito', views.pagamentocredito) //falta css

router.post('/pagamentocredito', form.finalizarcompraCredito);

router.get('/pagamentodebito', views.pagamentodebito); //falta css

router.post('/pagamentodebito', form.finalizarcompraDebito);

router.get('/pagamentopix', views.pagamentopix); //falta css

router.get('/produtosLista', views.produtosLista);

router.get("/del-produto/:id", views.deletarProduto);

router.get("/editarProdutoView", views.editarProdutoView);


router.get("/admin/editar-produto", form.editarProduto )

module.exports = router
