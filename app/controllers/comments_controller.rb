class CommentsController < ApplicationController
  before_action :set_topic
   
  def index
    @comment = @topic.comments
    render component: "Comments", props: { topic: @topic, comments: @comments }
  end
  
  def new
    @comment = Comment.new
    render component: "CommentNew", props: { topic: @topic, comment: @comment }
  end

  def create
    @comment = @topic.comments.new(comment_params)
    if @comment.save
      redirect_to sub_topic_path(@topic.sub_id, @topic)
    else
      render :new
      render component: "CommentNew", props: { topic: @topic, comment: @comment }
    end
  end

  private
    def set_topic
      @topic = Topic.find(params[:topic_id])
    end

    def comment_params
      params.require(:comment).permit(:body, :author)
    end
end