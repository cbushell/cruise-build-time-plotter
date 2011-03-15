APP_ROOT = File.expand_path(File.join(File.dirname(__FILE__), '..'))

require 'rubygems'
require 'sinatra'
require 'haml'

class Server < Sinatra::Application

  set :root, APP_ROOT

  get '/' do
    haml :index
  end

  get '/proxy' do
    require 'open-uri'
    open(params[:url]).read
  end

  get '/demo/:file' do
    file = File.join("demo", params[:file])
    [200, {'Content-Type' => 'text/csv'}, File.open(file).readlines]
  end

end