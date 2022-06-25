const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then(dbTag => res.json(dbTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {id: req.params.id},
    attributes: ['id', 'Tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then(dbTag => res.json(dbTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new Tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTag => res.json(dbTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: reqparams.id
    }
  })
  .then(dbTag => {
    if(!dbTag) {
      res.status(400).json({
        message: "No Tag Id's found"})
      return;
    }
    res.json(dbTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destory({
    where: {id: req.params.id}
  })
  .then(dbTag => {
    if(!dbTag) {
      resstatus(400).json({ 
        message: "No Tag Id's found"})
      return;
    }
    res.json(dbTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
