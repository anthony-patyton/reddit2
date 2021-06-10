class SubsController < ApplicationController
  before_action :set_sub, only: [ :show, :edit, :update, :destroy ]
  
  def index
    @subs = Sub.all
    render component: 'Subs', props: { subs: @subs }
  end

  def show
    render component: 'Sub', props: { sub: @sub }
  end

  def new
    @sub = Sub.new
    render component: 'SubNew', props: { sub: @sub }
  end

  # ONLY render partial when the file is named differently than the method
  # def new
  #   @sub = Sub.new
  #   render partial: "form"
  #   if the file was in another folder render 'topics/form'
  # end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to subs_path
    else
      render component: 'SubNew', props: { sub: @sub }
    end
  end

  def edit
    render component: 'SubEdit', props: { sub: @sub }
  end

  def update
    if @sub.update(sub_params)
      redirect_to subs_path
    else
      render component: 'SubEdit', props: { sub: @sub }
    end
  end

  def destroy
    @sub.destroy
    redirect_to subs_path
  end

  private
    def set_sub
      @sub = Sub.find(params[:id])
    end

    def sub_params
      params.require(:sub).permit(:name)
    end

end
