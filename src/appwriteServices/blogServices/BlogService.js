import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import config from "../../config/config";

class BlogServices {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createBlog({ title, content, userId, status, image, slug }) {
    try {
      return await this.database.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        { title, content, userId, status, image, slug }
      );
    } catch (error) {
      console.log(`Some error :: createBlog :: ${error}`);
    }
  }

  async updateBlog(title, content, status, image, slug) {
    try {
      return await this.database.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        { title, content, status, image, slug }
      );
    } catch (error) {
      console.log(`Some error :: createBlog :: ${error}`);
    }
  }

  async getBlog(slug) {
    try {
      return await this.database.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Some error :: getBlog :: ${error}`);
    }
  }

  async listBlogs(query = [Query.equal("status", 1)]) {
    try {
      return await this.database.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        query
      );
    } catch (error) {
      console.log(`Some error :: listBlogs :: ${error}`);
    }
  }

  async deleteBlog(slug) {
    try {
      return await this.database.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Some error :: deleteBlog :: ${error}`);
    }
  }

  async fileUpload(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`Some error :: fileUpload :: ${error}`);
    }
  }

  async fileDelete(fileId) {
    try {
      return await this.storage.deleteFile(config.appWriteBucketId, fileId);
    } catch (error) {
      console.log(`Some error :: fileDelete :: ${error}`);
    }
  }

  filePreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      console.log(`Some error :: filePreview :: ${error}`);
    }
  }
}

const blogServices = new BlogServices();

export default blogServices;
