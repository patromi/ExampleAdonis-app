import Database from '@ioc:Adonis/Lucid/Database'
import * as console from "console";

class ApiController {
  async hello({request}){
    return request;


  }

  async index({view})
  {
    const articles = await Database.from('users').select('*')
    console.log(articles);
    return view.render("home",{articles});

  }






}
module .exports = ApiController
