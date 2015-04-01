class BlabsController < ApplicationController
  def index
    @blabs = Blab.all.order('created_at DESC')
    render json: @blabs
  end
end
