const checkAdmin = async (req, res, next) => {
  try {
    if (!req.user.admin) {
      const error = new Error("Admin Access Required");
      error.statusCode = 401;
      throw error;
    }

    next();
  } catch (error) {
    res.status(error.statusCode || 400).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};

export default checkAdmin;
