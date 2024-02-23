import logo from './logo.svg';
import image from './Image1.png'
import './App.css';

function App() {
  return (
    <form>
        <div>
            <img src={image} alt="image" />
        </div>
           <h4>Blog post published</h4>
           <p>This blog post has been published. Team members will
               be able to edit this post and republish changes
            </p>
       <div class="button">
           <input type="reset" value="Cancel" class="reset" /> 
           <input type="submit" value="Confirm" class="submit" />
       </div>
    </form>
  );
}

export default App;
