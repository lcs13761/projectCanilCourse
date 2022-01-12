import { Request, Response } from 'express';
import { createMenuObject } from '../../helpers/createMenuObject';
import { Pet } from '../../models/pet';


export const index = (req: Request, res: Response) => {

  let list = Pet.getAll();
  let banner = {
    title: 'Todos os animais',
    background: 'allanimals.jpg'
  }


  res.render('pages/page', {
    banner,
    menu: createMenuObject('all'),
    list
  });

};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');
  let banner = {
    title: 'Cachorros',
    background: 'banner_dog.jpg',
  
  }

  res.render('pages/page', {
    banner,
    menu: createMenuObject('dog'),
    list
  });


};
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat');
  let banner = {
    title: 'Gatos',
    background: 'banner_cat.jpg'
  }

  res.render('pages/page', {
    banner,
    menu: createMenuObject('cat'),
    list
  });


};
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');
  let banner = {
    title: 'Peixes',
    background: 'banner_fish.jpg',

  }

  res.render('pages/page', {
    banner,
    menu: createMenuObject('fish'),
    list
  });


};

