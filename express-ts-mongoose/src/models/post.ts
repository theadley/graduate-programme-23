import mongoose, { Schema, model } from "mongoose";

export interface IPost {
  id: number;
  title: string;
  body: string;
  category: string;
  likes: number;
  tags: string[];
  date: Date;
  updatedAt?: Date;
  nextPostInSeries?: IPost;
}

const postSchema = new Schema<IPost>({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: String,
  likes: {
    type: Number,
    // min: 0
    validate: {
      validator: (value: number) => value >= 0,
      message: props => `Number of likes (${props.value}) is lower than 0`
    }
  },
  tags: [String],
  date: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  },
  nextPostInSeries: {
    type: mongoose.SchemaTypes.ObjectId, // _id field of a record
    ref: 'Post'
  }
});

postSchema.methods.sayHi = function () {
  console.log(`Hi! ${this.title} was last updated at ${this.updatedAt}`);
}


// .pre / .post for before / after 'save', 'validate', 'remove'
postSchema.pre('save', function (next) {
  console.log('I run before saving a Post object');
  next();
});


export const Post = model<IPost>('Post', postSchema);
