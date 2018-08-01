import mongoose from "mongoose";
import Blog from "./blog-model";
import Joi from "joi";
import blogService from "./blog-service";
import userService from "../users/user-service";
import User from "../users/user-model";

export default {
  async addBlog(req, res) {
    try {
      const { value, error } = blogService.validateBlog(req.body);
      if (error && error.details) {
        return res.status(400).json(error);
      }

      const blog = await Blog.create(value, { user: req.user._id });
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  // async findAllBlog(req, res){
  //   try{
  //
  //     const blog = await Blog.find({}, options)
  //     return res.json(blog)
  //   }catch (err) {
  //     console.log(err)
  //     return res.status(404).send(err)
  //   }
  // },
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ err: "could not find this blog" });
      }
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findPublished(req, res) {
    try {
      const blog = await Blog.find({ ispublished: true });
      if (!blog) {
        return res.status(404).json({ err: "could not find the blog" });
      }
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async findUnpublished(req, res) {
    try {
      const blog = await Blog.find({ ispublished: false });
      if (!blog) {
        return res.status(404).json({ err: "could not find the blog" });
      }
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async updateBlog(req, res) {
    try {
      const { id } = req.params;
      const { value, error } = blogService.validateBlog(req.body);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const blog = await Blog.findOneAndUpdate({ _id: id }, value, {
        new: true
      });
      if (!blog) {
        return res.status(404).json({ err: "could not find the blog" });
      }
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findOneAndRemove({ _id: id });
      if (!blog) {
        return res.status(404).json({ err: "could not find the song" });
      }
      return res.json(blog);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async likeBlog(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      if (
        blog.likes.filter(like => like.user.toString() === req.user.id).length >
        0
      ) {
        return res
          .status(400)
          .json({ message: "Vous avez déjà liké cet article" });
      }
      blog.likes.unshift({ user: req.user.id });
      blog.save();
      return res.json(blog);
    } catch (err) {
      return res.status(404).json({ message: "No blog found" });
    }
  },

  async unLikeBlog(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      if (
        blog.likes.filter(like => like.user.toString() === req.user.id)
          .length === 0
      ) {
        return res
          .status(400)
          .json({ message: "Vous n'avez pas encore liké cet article" });
      }

      const removeIndex = post.likes
        .map(item => item.user.tostring())
        .indexOf(req.user.id);

      blog.likes.splice(removeIndex, 1);

      blog.save();
      return res.json(blog);
    } catch (err) {
      return res.status(404).json({ message: "No blog found" });
    }
  },

  async comment(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      const newComment = {
        text: req.body.text,
        userName: req.user.userName,
        avatar: req.user.avatar,
        user: req.user.id
      };
      blog.comments.unshift(newComment);
      blog.save();
      return res.json(blog);
    } catch (err) {
      return res.status(404).json({ message: "No blog found" });
    }
  },
  async commentDelete(req, res) {
    try {
      console.log(req.user.id);
      console.log(comments.user.id);
      const { id } = req.params;
      const blog = await Blog.findById(id);
      // if (
      //   blog.comments.filter(
      //     comment => comment._id.toString() === req.params.comment_id
      //   ).length === 0
      // ) {
      //   return res.status(404).json({ message: "Comment does not exist" });
      // }
      /* else*/ if (req.user.id === comments.user.id) {
        const removeIndex = blog.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        blog.comments.splice(removeIndex, 1);
        blog.save();
        return res.json(blog);
      } else {
        return res.status(400).json({ message: "unhautorized" });
      }
    } catch (err) {
      return res.status(404).json({ message: "No blog found" });
    }
  }
};
