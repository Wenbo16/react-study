# React-Router4 Notes

## How to get started
```npm install```
```npm start```

## Two types of Router
When starting a new project, you need to determine which type of router to use. For browser based projects, there are ```<BrowserRouter>``` and ```<HashRouter>``` components. The ```<BrowserRouter>``` should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the ```<HashRouter>``` should be used for static websites (can only respond to requests for files that it knows about).

Usually it is preferable to use a ```<BrowserRouter>```, but if your website will be hosted on a server that only serves static files, then ```<HashRouter>``` is a good solution.

For our project, we will assume that the website will be backed by a dynamic server, so our router component of choice is the ```<BrowserRouter>```.

## History
Each router creates a history object, which it uses to keep track of the current location and re-render the website whenever that changes. The other components provided by React Router rely on having that history object available through the context, so they must be rendered inside of the router. A React Router component that does not have a router as one of its ancestors will fail to work.
Make sure you are rendering your component inside router, Otherwise you have to do it on different way.You can check this by printing this.props in your component. If it has history, then do the following otherwise do the next logic from below.

Example:
```
// back to /list route
this.props.history.push('/list');
```

## Path
```<Route path='/roster'/>```
When the pathname is '/', the path does not match, when the pathname is '/roster' or '/roster/2', the path matches. If you only want to match '/roster', then you need to use the ```"exact"``` prop. The following will match '/roster', but not '/roster/2'.
```<Route exact path='/roster'/>```
You might find yourself adding the exact prop to most routes.
In the future (i.e. v5), the exact prop will likely be true by
default.


## Rendering a <Router>
Router components only expect to receive a single child element. To work within this limitation, it is useful to create an ```<App>```component that renders the rest of your application (separating your application from the router is also important for server rendering because you can re-use the ```<App>``` on the server while switching to a ```<MemoryRouter>```).

## <Route>
The <Route> component is the main building block of React Router. Anywhere that you want to only render something if it matches the location’s pathname, you should create a ```<Route>``` element.

```<Route>``` can be created anywhere inside of the router, but often it makes sense to render them in the same place. You can use the<Switch> component to group ```<Route>```s. The ```<Switch>``` will iterate over its children elements (the routes) and only render the first one that matches the current pathname.


```
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
)
```
## What does the ```<Route>``` render?
Routes have three props that can be used to define what should be rendered when the route’s path matches. Only one should be provided to a <Route> element.

* component — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
```<Route path='/page' component={Page} />```

* render — A function that returns a React element. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
```
const extraProps = { color: 'red' }
<Route path='/page' render={(props) => (
    <Page {...props} data={extraProps}/>
)}/>
```
note:  This is essentially a stateless functional component. Internally, the big difference between the components passed to component and render is that component will use React.createElement to create the element, while render will call the component as a function. If you were to define an inline function and pass it to the component prop, it would be much slower than using the render prop.

* children — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.
```
<Route path='/page' children={(props) => (
    props.match
    ? <Page {...props}/>
    : <EmptyPage {...props}/>
)}/>
```
Typically, either the component or render prop should be used. The children prop can be useful occasionally, but typically it is preferable to render nothing when the path does not match. We do not have any extra props to pass to the components, so each of our ```<Route>```s will use the component prop.

The element rendered by the ```<Route>``` will be passed a number of props. These will be the match object, the current location object, and the history object (the one created by our router).


## Nested Routes
The player profile route /roster/:number is not included in the above ```<Switch>```. Instead, it will be rendered by the ```<Roster>``` component, which is rendered whenever the pathname begins with /roster.

It can be useful to group routes that share a common prefix in the same component. This allows for simpler parent routes and gives us a place to render content that is common across all routes with the same prefix.

As an example
```http://localhost:3000/list```
```http://localhost:3000/view/0```

## Links
<Link>s use the to prop to describe the location that they should navigate to. This can either be a string or a location object (containing a combination of pathname, search, hash, and state properties). When it is a string, it will be converted to a location object.

```<Link to={{ pathname: '/roster/7' }}>Player #7</Link>```


# Reference
* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf