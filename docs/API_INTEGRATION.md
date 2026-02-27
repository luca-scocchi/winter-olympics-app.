# API Integration

The Winter Olympics Expert Web App can integrate with free online AI APIs to provide responses in real-time.

### Hugging Face Inference API (Free Tier)

- Use a free Hugging Face model to send the **role-prompting AI prompt** and receive answers
- Example endpoint: `https://api-inference.huggingface.co/models/YOUR_MODEL`
- You can make **POST requests from JS** with your API token

### OpenAI Playground Free Tier

- Test the prompt interactively without coding  
- Copy the **role-prompting prompt** directly into the Playground  
- Only for testing, as GitHub Pages cannot directly store private API keys

> ⚠️ Note: For frontend-only deployment, direct API calls with secret keys are unsafe.  
> Consider using a free **proxy service** (like Replit or Hugging Face Spaces) if you need dynamic AI responses.
