---
layout: post
title: "React ile Modern Web Uygulamaları Geliştirmek"
date: 2025-01-22 10:00:00 +0300
author: "Erlan"
categories: ["Web Geliştirme", "React", "JavaScript"]
tags: ["react", "hooks", "component", "state-management", "frontend"]
image: "/assets/images/blog/react-modern-apps.svg"
excerpt: "React 18+ özellikleri ile modern, performanslı ve ölçeklenebilir web uygulamaları nasıl geliştirilir?"
---

# React ile Modern Web Uygulamaları Geliştirmek

React, 2025'te hala en popüler frontend framework'ü. Neden? Çünkü component-based mimarisi, zengin ekosistemi ve performansı ile web geliştirmeyi kolaylaştırıyor. İşte React ile modern uygulamalar geliştirmenin yolları!

## React 18+ Yenilikleri

### 1. Concurrent Rendering

React 18 ile gelen en büyük yenilik: Concurrent rendering. Kullanıcı deneyimini bozmadan UI güncellemeleri yapabiliyorsunuz.

```jsx
import { startTransition } from 'react'

function SearchResults() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    // Urgent: Input değerini hemen güncelle
    setQuery(e.target.value)
    
    // Non-urgent: Arama sonuçlarını transition ile güncelle
    startTransition(() => {
      setResults(search(e.target.value))
    })
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <ResultsList results={results} />
    </div>
  )
}
```

**Fayda:** UI responsive kalır, heavy computation sırasında bile!

### 2. Suspense for Data Fetching

```jsx
import { Suspense } from 'react'

function ProfilePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserProfile />
      <UserPosts />
    </Suspense>
  )
}

// Components throw promises
function UserProfile() {
  const user = use(fetchUser()) // React 19 feature
  return <div>{user.name}</div>
}
```

**Fayda:** Loading states otomatik, cleaner code!

### 3. Server Components (with Next.js)

```jsx
// Server Component - no 'use client'
async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } })
  
  return (
    <article>
      <h1>{post.title}</h1>
      <LikeButton postId={id} /> {/* Client Component */}
    </article>
  )
}
```

**Fayda:** Zero client-side JavaScript, SEO-friendly, hızlı!

## Modern React Patterns

### 1. Custom Hooks: Reusable Logic

```jsx
// useLocalStorage hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  )
}
```

### 2. Compound Components Pattern

{% raw %}
```jsx
// Accordion component with composition
function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null)
  
  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  )
}

Accordion.Item = function AccordionItem({ index, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext)
  const isOpen = openIndex === index
  
  return (
    <div className="accordion-item">
      <button onClick={() => setOpenIndex(isOpen ? null : index)}>
        Toggle
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  )
}

// Usage
<Accordion>
  <Accordion.Item index={0}>Content 1</Accordion.Item>
  <Accordion.Item index={1}>Content 2</Accordion.Item>
</Accordion>
```

### 3. Render Props vs Hooks

**Old Way (Render Props):**
```jsx
<MouseTracker>
  {(position) => <Cursor position={position} />}
</MouseTracker>
```
{% endraw %}

**Modern Way (Hooks):**
{% raw %}
```jsx
function Cursor() {
  const position = useMousePosition()
  return <div style={{ left: position.x, top: position.y }} />
}
```
{% endraw %}

**Winner:** Hooks! Cleaner, less nesting.

## State Management 2025

### 1. useState & useReducer (Built-in)

Basit state için `useState`, complex state için `useReducer`:

```jsx
function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })
  
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  
  return (
    <div>
      <p>Total: ${state.total}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  )
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      }
    default:
      return state
  }
}
```

### 2. Zustand (Modern & Minimal)

```jsx
import create from 'zustand'

// Create store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))

// Use in component
function Counter() {
  const { count, increment, decrement } = useStore()
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```

**Neden Zustand?**
- ✅ Minimal boilerplate
- ✅ TypeScript support
- ✅ DevTools integration
- ✅ 2KB gzipped

### 3. TanStack Query (Server State)

```jsx
import { useQuery, useMutation } from '@tanstack/react-query'

function UserProfile({ userId }) {
  // Data fetching with caching
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId)
  })
  
  // Mutations
  const updateUser = useMutation({
    mutationFn: (userData) => updateUserAPI(userData),
    onSuccess: () => {
      queryClient.invalidateQueries(['user', userId])
    }
  })
  
  if (isLoading) return <Spinner />
  if (error) return <Error message={error.message} />
  
  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={() => updateUser.mutate({ name: 'New Name' })}>
        Update
      </button>
    </div>
  )
}
```

**Faydaları:**
- ✅ Automatic caching
- ✅ Background refetching
- ✅ Optimistic updates
- ✅ Request deduplication

## Performance Optimization

### 1. React.memo - Component Memoization

```jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  // Heavy computation
  const result = expensiveCalculation(data)
  return <div>{result}</div>
})

// Only re-renders if data prop changes
```

### 2. useMemo & useCallback

```jsx
function DataTable({ data, filterText }) {
  // Memoize expensive calculation
  const filteredData = useMemo(() => {
    return data.filter(item => item.name.includes(filterText))
  }, [data, filterText])
  
  // Memoize callback
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id)
  }, [])
  
  return (
    <table>
      {filteredData.map(item => (
        <Row key={item.id} data={item} onClick={handleClick} />
      ))}
    </table>
  )
}
```

### 3. Code Splitting & Lazy Loading

```jsx
import { lazy, Suspense } from 'react'

// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'))
const AdminPanel = lazy(() => import('./AdminPanel'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  )
}
```

**Result:** Initial bundle size 70% daha küçük!

### 4. Virtual Scrolling

```jsx
import { FixedSizeList } from 'react-window'

function LargeList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </FixedSizeList>
  )
}
```

**Fayda:** 10,000+ item render edebilirsiniz, lag olmadan!

## TypeScript ile React

### Type-Safe Components

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick: () => void
  children: React.ReactNode
}

function Button({ variant, size = 'md', onClick, children }: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Usage - TypeScript validates props!
<Button variant="primary" onClick={() => console.log('Clicked')}>
  Click Me
</Button>
```

### Generic Components

```typescript
interface SelectProps<T> {
  options: T[]
  value: T
  onChange: (value: T) => void
  getLabel: (item: T) => string
}

function Select<T>({ options, value, onChange, getLabel }: SelectProps<T>) {
  return (
    <select 
      value={getLabel(value)} 
      onChange={(e) => {
        const selected = options.find(o => getLabel(o) === e.target.value)
        if (selected) onChange(selected)
      }}
    >
      {options.map(option => (
        <option key={getLabel(option)} value={getLabel(option)}>
          {getLabel(option)}
        </option>
      ))}
    </select>
  )
}

// Usage with type inference
<Select<User>
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  getLabel={(user) => user.name}
/>
```

## Testing Best Practices

### React Testing Library

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('button click increments counter', async () => {
  render(<Counter />)
  
  const button = screen.getByRole('button', { name: /increment/i })
  const count = screen.getByText(/count:/i)
  
  expect(count).toHaveTextContent('Count: 0')
  
  await userEvent.click(button)
  
  expect(count).toHaveTextContent('Count: 1')
})
```

### Component Testing Checklist

- [ ] User interactions
- [ ] Conditional rendering
- [ ] Edge cases
- [ ] Loading states
- [ ] Error states
- [ ] Accessibility

## Modern React Ecosystem

### Essential Libraries 2025

**UI Components:**
- shadcn/ui (Copy-paste components)
- Radix UI (Headless components)
- Chakra UI (Complete system)

**Forms:**
- React Hook Form (Performance king)
- Zod (Schema validation)

**Routing:**
- React Router v6
- TanStack Router (New, type-safe)

**Animation:**
- Framer Motion (Declarative)
- React Spring (Physics-based)

**Charts:**
- Recharts (Composable)
- Chart.js with react-chartjs-2

## Real-World Example: Blog App

```jsx
// Complete blog post component
function BlogPost({ postId }) {
  // Data fetching
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId)
  })
  
  // Comment mutation
  const addComment = useMutation({
    mutationFn: (comment) => postComment(postId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries(['post', postId])
    }
  })
  
  // Form state
  const { register, handleSubmit, reset } = useForm()
  
  // Submit handler
  const onSubmit = (data) => {
    addComment.mutate(data.comment)
    reset()
  }
  
  if (isLoading) return <Skeleton />
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      <section>
        <h2>Comments</h2>
        {post.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register('comment', { required: true })} />
          <button type="submit">Post Comment</button>
        </form>
      </section>
    </article>
  )
}
```

## Sonuç: React in 2025

React, modern web development'ın omurgası olmaya devam ediyor. 2025'te başarılı olmak için:

✅ **React 18+ features:** Concurrent rendering, Suspense
✅ **Modern patterns:** Hooks, custom hooks, composition
✅ **Performance:** Memoization, code splitting, lazy loading
✅ **TypeScript:** Type safety and better DX
✅ **Right tools:** Zustand, TanStack Query, React Hook Form
✅ **Testing:** React Testing Library

## Erlan ile React Projeleri

React expertise'imizle:

- ✅ Modern, performanslı web uygulamaları
- ✅ SaaS platformları
- ✅ Admin dashboard'ları
- ✅ E-commerce frontend'leri
- ✅ Next.js ile full-stack çözümler

**React projeniz için görüşelim!**
[İletişime geçin](/iletisim) - Ücretsiz danışmanlık

---

**Etiketler:** #React #Hooks #WebDevelopment #JavaScript #Frontend
