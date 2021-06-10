class TopicsController < ApplicationController
  before_action :set_sub
  before_action :set_topic, only: [:show, :edit, :update, :destroy]
  
  def index
    @topics = @sub.topics
    render component: 'Topics', props: { topics: @topics, sub: @sub }
  end

  def show
    render component: 'Topic', props: { topic: @topic, sub: @sub }
  end

  def new
    @topic = @sub.topics.new
    render component: 'TopicNew', props: { topic: @topic, sub: @sub }
  end

  def create
    @topic = @sub.topics.new(topic_params)
    if @topic.save
      redirect_to [@sub, @topic]
    else
      render component: 'TopicNew', props: { topic: @topic, sub: @sub }
    end
  end

  def edit
    render component: 'TopicEdit', props: { topic: @topic, sub: @sub }
  end

  def update
    if @topic.update(topic_params)
      redirect_to [@sub, @topic]
      # same as redirect_to sub_topic(@sub, topic)
    else
      render component: 'TopicEdit', props: { topic: @topic, sub: @sub }
    end
  end

  def destroy
    @topic.destroy
    redirect_to sub_topics_path(@sub)
  end

  private
    def set_sub
      @sub = Sub.find(params[:sub_id])
    end

    def set_topic
      @topic = Topic.find(params[:id])
    end

    def topic_params
      params.require(:topic).permit(:name, :body)
    end
end
