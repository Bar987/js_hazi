const renderMW = require("../middleware/renderMW");
const getChartDataMW = require("../middleware/getChartDataMW");
const getSorokMW = require("../middleware/getSorokMW");
const getResztvevokMW = require("../middleware/resztvevo/getResztvevokMW");
const getResztvevoMW = require("../middleware/resztvevo/getResztvevoMW");
const saveResztvevoMW = require("../middleware/resztvevo/saveResztvevoMW");
const delResztvevoMW = require("../middleware/resztvevo/delResztvevoMW");
const getSorMW = require("../middleware/sor/getSorMW");
const saveSorMW = require("../middleware/sor/saveSorMW");
const delSorMW = require("../middleware/sor/delSorMW");
const getSorgyarMW = require("../middleware/sorgyar/getSorgyarMW");
const saveSorgyarMW = require("../middleware/sorgyar/saveSorgyarMW");
const delSorgyarMW = require("../middleware/sorgyar/delSorgyarMW");

module.exports = function(app) {
  const objRepo = {};

  app.get("/", getChartDataMW(objRepo), renderMW(objRepo, "index"));

  app.get(
    "/resztvevo",
    getResztvevokMW(objRepo),
    renderMW(objRepo, "resztvevok")
  );

  app.use(
    "/resztvevo/new",
    saveResztvevoMW(objRepo),
    renderMW(objRepo, "szerkresztvevo")
  );

  app.use(
    "/resztvevo/edit/:resztvevoid",
    getResztvevoMW(objRepo),
    saveResztvevoMW(objRepo),
    renderMW(objRepo, "szerkresztvevo")
  );

  app.get(
    "/resztvevo/del/:resztvevoid",
    getResztvevoMW(objRepo),
    delResztvevoMW(objRepo)
  );

  app.get("/sorok", getSorokMW(objRepo), renderMW(objRepo, "sorok"));

  app.get("/sorok/sor/:sorid", getSorMW(objRepo), renderMW(objRepo, "sor"));

  app.use("/sorok/sor/new", saveSorMW(objRepo), renderMW(objRepo, "szerksor"));

  app.use(
    "/sorok/sor/edit/:sorid",
    getSorMW(objRepo),
    saveSorMW(objRepo),
    renderMW(objRepo, "szerksor")
  );

  app.get("/sorok/sor/del/:sorid", getSorMW(objRepo), delSorMW(objRepo));

  app.get(
    "/sorok/sorgyar/:sorgyarid",
    getSorgyarMW(objRepo),
    renderMW(objRepo, "sorgyar")
  );

  app.use(
    "/sorok/sorgyar/new",
    saveSorgyarMW(objRepo),
    renderMW(objRepo, "szerksorgyar")
  );

  app.use(
    "/sorok/sorgyar/edit/:sorgyarid",
    getSorgyarMW(objRepo),
    saveSorgyarMW(objRepo),
    renderMW(objRepo, "szerksorgyar")
  );

  app.get(
    "/sorok/sorgyar/del/:sorgyarid",
    getSorgyarMW(objRepo),
    delSorgyarMW(objRepo)
  );
};
