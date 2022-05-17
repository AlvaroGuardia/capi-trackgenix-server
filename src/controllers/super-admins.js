import SuperAdmin from '../models/Super-Admins';

// Add Super Admin

async function addSuperAdmin(req, res) {
  try {
    const superData = req.body;
    const superAdmin = new SuperAdmin({
      email: superData.email,
      password: superData.password,
    });
    const added = await superAdmin.save();
    return res.status(201).json({
      msg: `Super Admin succesfully added. \nSuper Admin: ${added}`,
    });
  } catch (error) {
    return res.json({
      msg: 'An error has occurred',
      error: error.details[0].message,
    });
  }
}

// Edit Super Admin

async function editSuperAdmin(req, res) {
  try {
    if (!req.params) {
      return res.status(400).json({
        msg: 'Missing id parameter',
      });
    }
    const edit = await SuperAdmin.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      password: req.body.password,
    });
    if (!edit) {
      return res.status(404).json({
        msg: 'Super Admin not found',
      });
    }
    return res.status(201).json({
      msg: `Super Admin updated. \nSuper Admin: ${edit}`,
    });
  } catch (error) {
    return res.json({
      msg: 'And error has ocurred',
    });
  }
}

// Delete Super Admin

async function deleteSuperAdmin(req, res) {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        msg: 'Missing id parameter',
      });
    }
    const del = await SuperAdmin.findByIdAndDelete(req.params.id);
    if (!del) {
      return res.status(404).json({
        msg: 'Super Admin not found',
      });
    }
    return res.status(200).json({
      msg: `Super Admin succefully deleted \nSuper Admin: ${del}`,
    });
  } catch (error) {
    return res.json({
      msg: 'An error has occurred',
    });
  }
}

export {
  addSuperAdmin,
  editSuperAdmin,
  deleteSuperAdmin,
};
