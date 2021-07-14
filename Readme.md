# React More Hooks

React More Hooks is a library for help you in react's projects.

## Installation

```bash
npm install react-more-hooks
```
Or, you can use Yarn
```bash
yarn add react-more-hooks
```

## List of hooks

| Name              | Arguments                             | Returns                         | Description                                                     |
|-------------------|---------------------------------------|---------------------------------|-----------------------------------------------------------------|
| useUnmounted      | func: React.EffectCallback            | void                            | Run the callback when the component is unmounted                |
| useDidMountEffect | Same then useEffect                   | void                            | Run the callback only if a prop change. Not run in first render |
| usePeristedState  | key:string                            | Same then useState              | A usestate where the initial value comes from local storage     |
| useStateCallback  | initialState: any, callback: Function | Same then useState              | A usestate where a callback is call when state change           |
| useIsMounted      | none                                  | () => boolean                   | Check if component is mount                                     |
| useForceUpdate    | none                                  | void                            | Force a rerender                                                |
| useScreenSize     | none                                  | {width: number, height:number } | Get screen size                                                 |

## License
[MIT](https://choosealicense.com/licenses/mit/)