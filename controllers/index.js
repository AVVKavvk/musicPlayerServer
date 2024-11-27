const Song = require('../model/song')
const {success, error} = require('../utils/wrapper')

const createSong = async (req, res)=>{
  try {
    const song = req.body.song;
    const singer = req.body.singer;
    const desc = req.body.desc;

    if (!song || !singer || !desc) {
      res.send(error(403, "all fileds required"))
    }

    const alreadyExist = await Song.findOne({song})
    if (alreadyExist){
      return res.send(error(402, "Already Exists"));
    }

    await Song.create({song, singer, description:desc})

    res.send(success(200,"Successfully created","Successfully created"))
  } catch (err) {
    res.send(error(402, err.message))
  }
}

module.exports = {createSong}