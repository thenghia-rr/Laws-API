import LawModel from "../models/Law.js";

// [POST] /api/law
const createLaw = async (req, res) => {
  try {
    const { name, desc, category, enactedDate, effectiveDate } = req.body;

    if (!name || !desc || !category || !enactedDate || !effectiveDate) {
      return res.status(400).send({
        massage:
          "All fields are required: name, desc, category, enactedDate, effectiveDate",
      });
    }

    const newLaw = {
      name,
      desc,
      category,
      enactedDate,
      effectiveDate,
    };
    const law = await LawModel.create(newLaw);
    return res.status(201).json(law);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ massage: error.message });
  }
};

// [GET] /api/laws
const getAllLaws = async (req, res) => {
  try {
    const laws = await LawModel.find({});
    return res.status(200).json({
      count: laws.length,
      data: laws,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ massage: error.message });
  }
};

// [GET] /api/law/:id
const getLawDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const law = await LawModel.findById(id);
    return res.status(200).json(law);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ massage: error.message });
  }
};

// [PUT] /api/law/:id
const editLaw = async (req, res) => {
  try {
    const { name, desc, category, enactedDate, effectiveDate  } = req.body;

    if (!name || !desc || !category || !enactedDate || !effectiveDate) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear, img",
      });
    }

    const { id } = req.params;
    const result = await LawModel.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({
        message: "Law not found",
      });
    } else {
      return res.status(200).send({ message: "Law updated succesfully !" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// [DELETE] /api/law/:id


export { createLaw, getAllLaws, getLawDetail, editLaw };
